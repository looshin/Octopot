from flask import Flask, render_template, request, url_for, flash, redirect
from email.message import EmailMessage
import ssl
import smtplib
import math


app = Flask(__name__)


@app.route('/', methods=("GET","POST"))
def hello():
    if request.method == 'POST':
        print("here")
        message = request.form['message']
        email = request.form['email']
        print(message)
        print(email)
        email_sender="octopotofficial@gmail.com"
        email_password="ccbc oyts ezft eiwt"
        email_reciever="uleek500@gmail.com"
        subject="Message Sent"

        if email == '':
            return render_template('Octopot.html')

        body=message+"\n"+email

        em = EmailMessage()

        em['From'] = email_sender
        em['To'] = email_reciever
        em['Subject'] = subject
        em.set_content(body)

        context = ssl.create_default_context()

        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_sender, email_password)
            smtp.sendmail(email_sender, email_reciever, em.as_string())

        email_sender="octopotofficial@gmail.com"
        email_password="ccbc oyts ezft eiwt"
        email_reciever="uleek500@gmail.com"
        subject="Check out my new video"

        body=message+"\n"+email

        body2="Message sucessfuly sent. Please email us again if you have any questions"

        em2 = EmailMessage()

        email_reciever2=email

        subject2="Message Sucessfuly Sent! 🐙"
    
        em2['From'] = email_sender
        em2['To'] = email_reciever2
        em2['Subject'] = subject2
        em2.set_content(body2)

        # context = ssl.create_default_context()

        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_sender, email_password)
            smtp.sendmail(email_sender, email_reciever2, em2.as_string())


        return render_template('Octopot.html')
    return render_template('Octopot.html')


if __name__ =='main':
    app.run(debug=False, host="0.0.0.0")

@app.route('/OctopotAbout', methods=("GET","POST"))
def about():
    return render_template('OctopotAbout.html')

@app.route('/OctopotFinance', methods=("GET","POST"))
def finance():
    if request.method == 'POST':
        print("working")
        message = request.form['amount']
        print(message)
        range = int(request.form["percentage"]) - 1
        print(range)
        return render_template('GatewayCheckout.html')
    return render_template('OctopotFinance.html')

@app.route('/OctopotProcess', methods=("GET","POST"))
def process():
    return render_template('OctopotProcess.html')

@app.route('/OctopotPersonal', methods=("GET","POST"))
def personal():
    return render_template('OctopotPersonal.html')

@app.route('/OctopotCompany', methods=("GET","POST"))
def company():
    return render_template('OctopotCompany.html')


@app.route('/GatewayCheckout', methods=("GET","POST"))
def checkout():
    return render_template('GatewayCheckout.html')

