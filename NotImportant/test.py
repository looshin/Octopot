from email.message import EmailMessage
import ssl
import smtplib

email_sender="octopotofficial@gmail."
email_password="ccbc oyts ezft eiwt"
email_reciever="octopotofficial@gmail.com"

subject="Check out my new video"

body="""
I've just published a new video. gyatt skidi lol.



"""

em = EmailMessage()

em['From'] = email_sender
em['To'] = email_reciever
em['Subject'] = subject
em.set_content(body)

context = ssl.create_default_context()

with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
    smtp.login(email_sender, email_password)
    smtp.sendmail(email_sender, email_reciever, em.as_string())