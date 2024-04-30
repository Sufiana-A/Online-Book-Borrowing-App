from flask import Flask, jsonify

app = Flask(__name__)

book_reviews = [
    {"user_id": 1, "book_id": 1, "review": "Sangat Menarik"},
    {"user_id": 2, "book_id": 2, "review": "Membosankan"},
    {"user_id": 3, "book_id": 3, "review": "Very Inspirational"},
    {"user_id": 3, "book_id": 1, "review": "The life lessons are so wise"}
]

@app.route('/reviews')
def get_reviews():
    return jsonify(book_reviews)

# get reviews by book
@app.route('/reviews/<int:book_id>')
def get_review(book_id):
    reviews = [review for review in book_reviews if review['book_id'] == book_id]
    
    if reviews:
        return jsonify(
            {"book_id": book_id},
            {"reviews": reviews}
        )
    else:
        return jsonify(
            {"message": "product not found"},
            404
        )

if __name__ == '__main__':
    app.run(debug=True, port=5003)