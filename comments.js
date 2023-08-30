
const app = new Vue({
    el: '.comment-box',
    data: {
        comments: [
            {
                name: 'Ann',
                date: '03/12/2023',
                comment: 'well done!'
            },
            {
                name: 'Muzna',
                date: '4/01/2023',
                comment: 'Good Job.'
            }
        ],
        newComment: {
            name: '',
            comment: ''
        }
    },
    methods: {
        addComment() {
            const date = new Date().toLocaleDateString();
            const newComment = {
                name: this.newComment.name,
                date: date,
                comment: this.newComment.comment
            };
            this.comments.push(newComment);
            this.newComment.name = '';
            this.newComment.comment = '';
        }
    }
});