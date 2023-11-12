import { useEffect, useRef } from "react";

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: "dn1gcn5rm",
                uploadPreset: "eepn9gqe",
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                }
            }
        );
        
    },[])
    return  (
        <div>
            <button onClick={() => widgetRef.current.open()}>Upload</button>
        </div>
    )
}

export default UploadWidget;