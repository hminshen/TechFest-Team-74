from services.bardServices import BardService
from flask import request, jsonify

class BardController:
    @staticmethod
    def get_questions():
        # Extracting the data from the request:
        pre_interview_info = request.get_data().decode("utf-8")
        
        # Crafting the prompt:
        before = "I would like you to conduct a mock job interview with me, where i give you some information and you craft questions based on the information. You will get my answers and give me honest feedback. The information is below:\n"
        after = "\nCan you give me the questions in the form of json format? Without any leading text before and after."
        pre_interview_prompt =  before + pre_interview_info + after
        
        ## print("Question Prompt:", pre_interview_prompt)
        data = BardService.get_bard_query(pre_interview_prompt)
        return jsonify(data)
    
    @staticmethod
    def get_feedback(input_text):
        input_text = request.form['prompt']
        print("Question:", input_text)
        data = BardService.get_bard_query(input_text)
        return jsonify(data)