import numpy as np
from flask import Flask, request, jsonify, render_template
import json
import pickle
import joblib
app = Flask(__name__)
model = joblib.load('node\diabetes_model.pkl')


@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''

    byte_string = request.get_data(cache=True, as_text=False, parse_form_data=False)
    int_features = list(map(int, byte_string.decode('utf-8').strip('[]').split(',')))
    print(int_features)
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)
    
    if((prediction[0])==1):

        output= ' diabetes is detected'
    else:
        output='diabetes  not detected'
    

    return json.dumps({"result":output})

if __name__ == "__main__":
    app.run(debug=True)