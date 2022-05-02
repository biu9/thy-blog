import * as React from 'react';
import Comment from './Comment';
import { useEffect,useState} from 'react';

function CommentList() {
    var [comments, setComments] = useState<any[]>([]);
    
    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:1234/api/getComments', {
                method: 'get',
            }).then(res => res.json());
            setComments(response.data);
        })();
    }, []);
    console.log(comments);
    var test = comments.map((comment:any) => {
        return <Comment name={comment.userName} content={comment.content} key={comment.id}/>
    });
    return (
        <div className='comment-list-container'>
            {comments.map(item => {
                return <Comment name={item.name} content={item.content} key={item.id}/>
            })}
        </div>
    )
}

export default CommentList;