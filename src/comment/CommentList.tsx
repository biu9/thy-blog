import * as React from 'react';
import Comment from './Comment';
import { useEffect,useState} from 'react';

function CommentList({blogId}:{blogId: string}) {
    var [comments, setComments] = useState<any[]>([]);
    useEffect(() => {
        (async () => {
            console.log("向服务器请求评论",`http://localhost:1234/api/getComments/?id=${blogId}`);
            const response = await fetch(`http://localhost:1234/api/getComments/?id=${blogId}`, {
                method: 'get',
            }).then(res => res.json());
            setComments(response.data);
        })();
    }, []);
    return (
        <div className='comment-list-container'>
            {comments.map(item => {
                return <Comment name={item.name} content={item.content} key={item.id}/>
            })}
        </div>
    )
}

export default CommentList;