from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')



@app.route('/resume')
def resume():
    return render_template('resume.html')

if __name__ == '__main__':
    app.run(debug=True)
    
    
    
    
    
    
    
    
    