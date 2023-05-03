import './Destination.css';
import mon1 from './mon1.jpg'
import mon2 from './mon2.jpg'

export const Destination = () => {
    return(
        <div className='destination'>
            <h1>Chào mừng bạn khám phá các bài viết</h1>
            <h4>các vấn đề có thể sẽ xuất hiện ở đây, các bạn hãy theo dõi</h4>
            <div className='first-des'>
                <div className='des-text'>
                    <h2><a href='https://clb100.com/cach-song-100-tuoi/thien-dinh-bi-quyet-30673.html'>Qua loa về dinh dưỡng cơ bản cho bạn</a></h2>
                    <p>
                    Bữa ăn được xem là cân đối dinh dưỡng và hợp khẩu vị phải có các chất dinh dưỡng hợp lý.
                    Đó là: Khẩu phần bột đường chiếm 65 - 70%, chất đạm chiếm 12 - 14%, chất béo chiếm 18 - 20%. 
                    Ngoài ra, còn cần bổ sung thêm chất khoáng, vitamin và nước cho cơ thể (từ rau, trái cây).
                    Khẩu phần ăn đầy đủ chất dinh dưỡng rất quan trọng bởi các cơ quan, mô trong cơ thể cần nhiều dinh dưỡng đủ để hoạt động hiệu quả. 
                    Nếu không ăn đầy đủ chất dinh dưỡng cơ thể dễ ốm, mệt mỏi ảnh hưởng đến học tập và làm việc.
                    Bữa ăn được xem là cân đối dinh dưỡng và hợp khẩu vị phải có các chất dinh dưỡng hợp lý.
                    Đó là: Khẩu phần bột đường chiếm 65 - 70%, chất đạm chiếm 12 - 14%, chất béo chiếm 18 - 20%. 
                    Ngoài ra, còn cần bổ sung thêm chất khoáng, vitamin và nước cho cơ thể (từ rau, trái cây).
                    Khẩu phần ăn đầy đủ chất dinh dưỡng rất quan trọng bởi các cơ quan, mô trong cơ thể cần nhiều dinh dưỡng đủ để hoạt động hiệu quả. 
                    Nếu không ăn đầy đủ chất dinh dưỡng cơ thể dễ ốm, mệt mỏi ảnh hưởng đến học tập và làm việc.  
                    </p>
                </div>
                <div className='image'>
                    <img src={mon1} />
                    <img src={mon2} />
                </div>
            </div>

        </div>
    )
}