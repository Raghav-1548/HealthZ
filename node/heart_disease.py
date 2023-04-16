import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import json 

app = Flask(__name__)
model = pickle.load(open('node\heart_disease.pkl', 'rb'))

@app.route('/predict',methods=['POST'])
def predict():

    byte_string = request.get_data(cache=True, as_text=False, parse_form_data=False)
    int_features = list(map(int, byte_string.decode('utf-8').strip('[]').split(',')))

    final_features = [np.array(int_features)]

    prediction = model.predict(final_features)


    if((prediction[0], 2)==1):
        output= 'Heart disease detected'
    else:
        output='Heart disease not detected'

    return json.dumps({"result":output})


if __name__ == "__main__":
    app.run(debug=True)