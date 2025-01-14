const  Article = ({ data }) => {
  return (
   <div>
        <a href={data.url} target="_blank" rel="noopener noreferrer" className='article-title'>
        {data.title}
        </a>
        <p className='article-description'>{data.description}</p>
    </div>
  )
}

export default Article
