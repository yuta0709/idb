import requests


API_ORIGIN = "http://localhost:8080"


def post_idea(title: str, description: str, deadline: str):
    data = {
        "title": title,
        "description": description,
        "deadline": deadline
    }
    res = requests.post(f"{API_ORIGIN}/ideas", json=data)
    return res.json()


def get_ideas():
    query = {
        "page": 0,
        "limit": 20,
    }
    res = requests.get(f"{API_ORIGIN}/ideas", json=query)
    return res.json()


def get_idea(id: int):
    res = requests.get(f"{API_ORIGIN}/ideas/{id}")
    return res.json()


def post_comment(comment: str, idea_id: int):
    data = {
        "comment": comment
    }
    res = requests.post(f"{API_ORIGIN}/ideas/{idea_id}/comment")
    return res.json()


def main():
    title = "どこでもドア"
    description =  "片開き戸を模した道具。目的地を音声や思念などで入力した上で扉を開くと、その先が目的地になる"
    deadline = "2100年"
    print(post_idea(title, description, deadline))


if __name__ == "__main__":
    main()