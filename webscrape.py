import requests
from bs4 import BeautifulSoup
import json

# Make a request to the website
url = 'https://infraexam.com/networking-essentials-2-0/networking-essentials-version-2-modules-5-8-network-protocols-and-architecture-group-exam-answers/'
response = requests.get(url)

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

# Find the first <ol> tag in the HTML
ol_tag = soup.find('ol')

# Extract the contents of each <li> tag inside the <ol> tag
data = []
if ol_tag:
    li_tags = ol_tag.find_all('li')
    for li_tag in li_tags:
        if "Answers Explanation & Hints:" not in li_tag.get_text():
            try:
                question = li_tag.find('h3').get_text(strip=True)
                options = [option.get_text(strip=True) for option in li_tag.find('ul').find_all('li')]
                correct_answer = options[0]
                data.append({
                    'question': question,
                    'options': options,
                    'correctAnswer': correct_answer
                })
            except:
                print("that one failed")

# Write the data to a file
with open('mod5-8.json', 'w') as f:
    json.dump(data, f)
