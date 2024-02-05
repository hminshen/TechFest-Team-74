import os
import bardapi

class BardService:
    @staticmethod
    def get_bard_query(input_text):
        # set your __Secure-1PSID value to key
        token = os.getenv("BARD_COOKIE")

        # Send an API request and get a response.
        response = bardapi.core.Bard(token).get_answer(input_text)
        print(response)
        return response["content"]
    