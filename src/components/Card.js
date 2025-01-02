import react from "react";

const Card = ({ book }) => {
    console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    // let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    let authors=item.volumeInfo.authors && item.volumeInfo.authors[0];
                    let data=item.volumeInfo.publishedDate && item.volumeInfo.publishedDate;
                    // if(thumbnail!== undefined && amount !==undefined)
                    // {
                        return (
                            <>
                            <div className="card">
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="author">{authors} ( {data} )</p>
                                </div>
                            </div>
                             
                            </>
                        )
                    // }
                    
                })
            }

        </>
    )
}
export default Card;