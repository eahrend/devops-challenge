terraform {
  backend "s3" {
    bucket = "devops-test-1"
    key    = "terraform.tfstate"
    region = "us-east-1"
  }
}
