import tensorflow as tf
from tensorflow import keras
import tensorflowjs as tfjs

# Load your pre-trained model (assuming it's a Keras model)
model = keras.models.load_model('path_to_your_pretrained_model.h5')

# Convert and save the model in TensorFlow.js format
tfjs.converters.save_keras_model(model, 'path_to_save_tfjs_model/')
