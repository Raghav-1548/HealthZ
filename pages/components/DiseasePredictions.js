
  
import Link from 'next/link'
import React from 'react'

function DiseasePredictions() {
  return (
    <div>
    <Link href='/components/DiabetesPrediction'>Diabetes Prediction</Link>
    <Link href='/components/HeartDiseasePredictor'>Heart Disease Prediction</Link>
    </div>
  )
}

export default DiseasePredictions
