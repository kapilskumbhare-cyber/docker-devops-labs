# Use the official Python image as the base image
FROM python:3.13-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the dependency file first
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application source code
COPY . .

# Document that the application listens on port 5000
EXPOSE 5000

# Command to start the Flask application
CMD ["python", "app.py"]
