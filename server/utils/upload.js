import multer from 'multer';
import pkg from 'multer-gridfs-storage';
const {GridFsStorage} = pkg;

const storage = new GridFsStorage({
    url: `mongodb://127.0.0.1:27017/blogs`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 