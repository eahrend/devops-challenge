# DevOps Hiring challenge

This is the MakerBot DevOps hiring challenge. As you go through this please note that you must complete all the tests. As these tests build off each other. These tests are designed to touch on all the areas in which you will be working in.

In order to avoid bounced emails, we would like you to submit your results by uploading the relevant zip file to a shared Google Drive folder. In order to obtain the URL for this folder please supply your Gmail or Google-based email address to either your agent or the MakerBot member of staff who assigned you the test.

Please make this a **single** zip file named **{yourname}-devops.zip** containing:

1. A single markdown file with the answers to the technical questions
2. One folder containing the technical tests

## Test 1

Build a complete environment for Google Cloud that must contain the following:

    - Kubernetes Cluster
    - VPC
    - Public/Private subnets in multiple zones
    - S3 Bucket
    - logging
    - IAM roles / Service Roles

This service should run web service in HA. See basic web service main.go in `test1/web/` This should use a config map, svc and be exposed via an ingress with SSL.

### Requirements

* In your solution please emphasize on readability, maintainability and DevOps methodologies. We expect a clear way to recreate your setup using `terraform apply`.
* The infrastructure provider is Google Cloud.
* You should provide clear instructions on how to use the code you have provided. The clarity and precision of these instructions - and the ease with which the interviewers can execute them - will be a key part of the assessment. Please create a README file detailing said instructions. Please also use this file for listing any additional comments or observations you might want to share about your submission.
* Include Diagrams with your documentation. Being able to diagram infrastructure and service workflows is a key part of this test.

### Bonus Points

* If you leverage let's encrypt with your kubernetes stack.
* If you can document all aspects of your code, in the README and within the code itself.
* If you deploy spinnaker to your kubernetes environment

## Test 2

 Fix the bug in the code in the directory and make a Makefile for deploying it using a helm chart to your kubernetes cluster. A hint should be Kube context aware.

### Requirements

* Documentation on what you fixed and why that was the problem
* Documentation on how to deploy using the Makefile
* You need to provide clear instructions on how to build locally and run.

### Bouns Points

* If you make use of config maps in kubernetes
* If you use an ingress-envoy to expose the service with SSL
* If you use istio's policies for whitelisting values in value.yml for the helm chart.

## Test 3

Write a simple web service in any language of your choosing using the Thingiverse API.

### Requirements

* Must make use of the Thingiverse Oauth service
* Must be documented on how it works with Thingiverse
* Documentation your web services workflow.
* Must be shippable via Docker container and Helm chart for running on kubernetes

### Bonus Points

* You wrote it in a language that there's not a pre-existing library
* You used gin golang framework or go buffalo
* You included documentation

# Technical questions

Please answer the following questions in a markdown file called `answers_to_tech_questions.md`.

1. How long did you spend on the test? What would you add to your solution if you had more time? If you didn't spend much time on the test then use this as an opportunity to explain what you would add.
2. Why did you choose the language you used for the test?
3. Explain the difference between monolith vs microservices?
4. What was the most useful feature that was added to the latest version of your chosen language in test 3?
5. Please describe yourself using JSON.

#### Thanks for your time, we look forward to hearing from you!
- The [MakerBot DevOps team](http://github.com/makerbot)