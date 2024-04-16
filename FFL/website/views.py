from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("index.html")

@views.route('/index')
def index():
    return render_template("index.html")

@views.route('/about')
def about():
    return render_template("about.html")

@views.route('/class')
def classes():
    return render_template("class.html")

@views.route('/contact')
def contact():
    return render_template("contact.html")

@views.route('/faq')
def faq():
    return render_template("faq.html")

@views.route('/location')
def location():
    return render_template("location.html")

@views.route('/membership')
def membership():
    return render_template("membership.html")

@views.route('/privacy')
def privacy():
    return render_template("privacy.html")

@views.route('/terms')
def terms():
    return render_template("terms.html")