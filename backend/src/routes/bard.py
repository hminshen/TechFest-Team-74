from flask import Blueprint
from flask_cors import CORS
from controllers.bardController import BardController

# Create the blueprint and enable CORS globally for it:
bard_blueprint = Blueprint('bard', __name__)
CORS(bard_blueprint)

@bard_blueprint.route('/bard/getQuestions', methods=['POST'])
def get_questions():
 #   try: 
    data = BardController.get_questions()
    #data = "{\n\"questions\": [\n  {\n    \"type\": \"behavioral\",\n    \"text\": \"Tell me about a time you had to overcome a technical challenge in a project. What was the challenge, how did you approach it, and what was the outcome?\"\n  },\n  {\n    \"type\": \"behavioral\",\n    \"text\": \"Describe a situation where you had to work effectively with a team member who had a different working style than you. How did you manage the situation and what was the result?\"\n  },\n  {\n    \"type\": \"leadership\",\n    \"text\": \"Have you ever had to take initiative and lead a project or task, even though you were not in a formal leadership position? If so, tell me about it.\"\n  },\n  {\n    \"type\": \"technical\",\n    \"text\": \"The job description mentions experience with React.js and Node.js. Can you walk me through a project you've built using these technologies, highlighting the specific challenges you faced and how you solved them?\"\n  },\n  {\n    \"type\": \"technical\",\n    \"text\": \"The role involves collaborating with product managers and UX designers. Can you describe your experience working with cross-functional teams and how you ensure the final product meets both technical and user needs?\"\n  },\n  {\n    \"type\": \"personal\",\n    \"text\": \"What are your career aspirations? What do you hope to achieve in the next 5-10 years?\"\n  },\n  {\n    \"type\": \"motivational\",\n    \"text\": \"Why are you interested in working at DSTA, specifically in the C3D Programme Centre?\"\n  }\n]\n}"
    return data
  #  except:
       # return "No prompt given"

@bard_blueprint.route('/bard/getFeedback', methods=['GET'])
def get_bard_data():
    try: 
        data = BardController.get_bard_data()
        return data
    except:
        return "No prompt given"    

@bard_blueprint.route('/bard/Test', methods=['GET'])
def get_bard_test_data():
    try: 
        data = "Hello World"
        return data
    except:
        return "No prompt given"