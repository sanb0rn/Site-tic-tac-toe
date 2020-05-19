
class Comment {
    constructor(name, mark, text) {
        this.name = name;
        this.mark = mark;
        this.text = text;
    }


    Add() {

        $(".reviews").append("<div class='comment'></div>");
        let date = new Date();
        $(".comment").last().append("<div class='content'><b>" + this.name + ':</b><br>' + this.text + '<br>Оценка: ' + this.mark + '/5<br><i>Дата: ' + date + '</i><br></div');

        $(".comment").last().append("<button class='delete btn btn-danger'>Удалить</button>");
        $(".delete").click(function deletee() {       
            // $(this).parent().remove();
        });

        let txt = this.text;
        let nam=this.name;
        let mrk=this.mark;
        $(".comment").last().append("<button class='change btn btn-primary'>Изменить</button>");

        $(".change").last().click(function Change() {

                $(this).parent().append("<textarea class='changeReview'>" + txt + "</textarea>");
                $(this).parent().append("<button class='save btn btn-success'>Сохранить</button>");

                $(this).parent().append("<select class='newRating'><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select>");

                $(this).css("display" , "none");
                let newCom=$(".changeReview").val;
                let sel=(".newRating").val;
                $(".save").click(function save() {
                        date = new Date();
                        txt=$(this).parent().find('textarea.changeReview').val();
                        mrk=$(this).parent().find('select.newRating').val();
                        $(this).parent().find('div.content').replaceWith("<div class='content'><b>" + nam + ':</b><br>' + txt + '<br>Оценка: ' + mrk + '/5<br><i>Дата: ' + date + "</i><br></div>");
                        $(this).parent().find('textarea.changeReview').remove();
                        $(this).parent().find('select.newRating').remove();
                        $(this).parent().find('button.change').css("display", "block");
                        $(this).parent().find('button.save').remove();

                    }
                );
            }
        );
    }
}

function post(){
    $.getJSON("posts.json",function (json) {
        for (let i=0;i<json.posts.length;i++){
            let jsonComment=new Comment(json.posts[i].name,json.posts[i].mark,json.posts[i].text);
            jsonComment.Add();
        }
    })
}


function addNewComment() {

    if (document.getElementById('Name').value === '' || document.getElementById('Review').value === '') {
        alert('Пожалуйста, заполните все поля!');
        exit;
    }

    let newComment = new Comment(document.getElementById('Name').value, document.getElementById('Rating').value, document.getElementById('Review').value);
    newComment.Add();
    document.getElementById('Name').value = '';
    document.getElementById('Review').value = '';
}
