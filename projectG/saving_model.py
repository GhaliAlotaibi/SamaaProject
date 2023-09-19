import tensorflow as tf
from tensorflow import keras
import tensorflowjs as tfjs

# Load your pre-trained model (assuming it's a Keras model)
model = keras.models.load_model('./keras_model.h5')

# Convert and save the model in TensorFlow.js format
tfjs.converters.save_keras_model(model, './content/model.json')
