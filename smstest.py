import os
from twilio.rest import Client

# Replace these placeholders with your actual Twilio credentials
account_sid = 'AC68999923900d013eaf9141d2be5a222d'#tochange
auth_token = 'a6f299226bdbb485428dbf7335e4ec9a'#tochange
from_number = '+16189120576'
to_number = 'my_Num'

# Create a Twilio client
client = Client(account_sid, auth_token)

# Send an SMS
message = client.messages.create(
    body='This is a test sms',
    from_=from_number,
    to=to_number
)

print('Message SID:', message.sid + ', Message status' + message.status)
