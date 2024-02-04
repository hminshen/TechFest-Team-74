import os

class Config:
    FLASK_ENV = os.getenv('FLASK_ENV', 'development')
    SECRET_KEY = os.getenv('SECRET_KEY', 'defaultsecretkey')
    BARD_COOKIE = os.getenv('BARD_COOKIE')