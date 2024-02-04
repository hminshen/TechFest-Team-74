from flask import Blueprint
from controllers.bardController import BardController

bard_blueprint = Blueprint('bard', __name__)

@bard_blueprint.route('/bard/getQuestions', methods=['GET'])
def get_questions():
 #   try: 
    data = BardController.get_questions()
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

@bard_blueprint.route('/bardTest', methods=['GET'])
def get_bard_test_data():
    try: 
        data = "Hello World"
        return data
    except:
        return "No prompt given"