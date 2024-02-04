import bardapi

# set your __Secure-1PSID value to key
token = 'g.a000gAgEzZBLKxtQSP0NRChq3ujkg-e7_zUkfQUrxBzd5nyuYnuxAhsSa_5o5g-sEymt1ykl2AACgYKAUQSAQASFQHGX2MiX0mwBk2scDnklqG69RgQpRoVAUF8yKqqjwVlpcKIsXLCxDgrhday0076'
print ("test")
# set your input text
input_text = "what is python used for?"
print(input_text)

# Send an API request and get a response.
response = bardapi.core.Bard(token).get_answer(input_text)
print(response)