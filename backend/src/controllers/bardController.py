from services.bardServices import BardService
from flask import request, jsonify

class BardController:
    @staticmethod
    def get_questions():
        # Extracting the data from the request:
        # pre_interview_info = request.get_data().decode("utf-8")
        # Get JSON data from the request
        pre_interview_info = request.get_json()

        # Extract values from the JSON data
        job_type = "\nJob Type: " + pre_interview_info.get('job_type')
        experience_level = "\nExperience Level: " + pre_interview_info.get('experience_level')
        skills = "\nSkills: " + str(pre_interview_info.get('skills', []))
        job_description = "\nJob Description: " + pre_interview_info.get('job_description')
        resume = "\nResume: " + pre_interview_info.get('resume')
        cover_letter = "\nCover Letter: " + pre_interview_info.get('cover_letter')
        focus_areas = "\nFocus Areas: " + str(pre_interview_info.get('focus_areas', []))
        interview_info = "\n--Start Of Info--\n" + job_type + experience_level + skills + job_description + resume + cover_letter + focus_areas + "\n--End Of Info--\n"
        
        # Target Format of the Response:
        json_format_res = """\n\nCan you give me the questions in the form of json format? I want the answer that you provide me to only follow this format:\n{
  "questions": [
    {"question": "Tell me about a project you've worked on that involved collecting and processing data.", "type": "behavioral"},
    {"question": "How do you approach the task of designing software for maintainability and scalability?", "type": "technical"},
    {"question": "Why are you interested in working at DSTA's Information Programme Centre?", "type": "motivational"},
    {"question": "What are your salary expectations?", "type": "negotiation"},
    {"question": "Do you have any questions for me?", "type": "meta"}
  ]
}\n"""

        # Crafting the prompt:
        before = "I would like you to conduct a mock job interview with me, where i give you some information and you craft questions based on the information. You will get my answers and give me honest feedback. The information is below:\n"
        after = "\nWithout any leading text before and after. I want your whole message to just be the json, without any greetings etc"
        pre_interview_prompt =  before + interview_info + json_format_res + after
        print(pre_interview_prompt)
        
        ## print("Question Prompt:", pre_interview_prompt)
        data = BardService.get_bard_query(pre_interview_prompt)
        print(data)
        return jsonify(data)
    
    @staticmethod
    def get_feedback(input_text):
        input_text = request.form['prompt']
        print("Question:", input_text)
        data = BardService.get_bard_query(input_text)
        return jsonify(data)