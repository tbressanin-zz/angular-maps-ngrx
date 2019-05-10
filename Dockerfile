FROM node:10

# Copy application code.
COPY . /app/

# Install dependencies.
RUN npm --unsafe-perm install node-sass

# Public Port
EXPOSE 8080