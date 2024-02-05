import os

from flask import Flask
from routes.bard import bard_blueprint
from dotenv import load_dotenv
from config.config import Config
import os

def create_app(test_config=None):

    # Load environment variables from .env file
    load_dotenv()

    # create and configure the app
    app = Flask(__name__)
    
    app.config.from_object(Config)

    #app.config.from_mapping(
    #    SECRET_KEY='dev',
        #DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    #)

    # register the routes
    app.register_blueprint(bard_blueprint, url_prefix='/api')
    return app

app = create_app()
app.run()