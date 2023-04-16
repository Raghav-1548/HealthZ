import numpy as np
from flask import Flask, request, jsonify, render_template
import json
import joblib

app = Flask(__name__)
model = joblib.load('node\cardio_model.pkl')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    # int_features = [int(x) for x in request.form.values()]
    # print(request.form.values())
    # print(int_features)
    byte_string = request.get_data(cache=True, as_text=False, parse_form_data=False)
    int_features = list(map(int, byte_string.decode('utf-8').strip('[]').split(',')))
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    # output = round
    if((prediction[0])==1):
        output= 'cardio disease is detected'
    else:
        output='cardio disease not detected'
    

    return json.dumps({"result":output})
if __name__ == "__main__":
    app.run(debug=True)