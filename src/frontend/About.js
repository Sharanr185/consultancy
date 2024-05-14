import img1 from '../Image/a1.webp';
export default function About() {
    return (
        <>
            <div style={{ display: "inline-block", marginLeft:'15%', marginRight:'5%' ,marginTop:'10%', width: 700, fontSize: 20}}>
                <p>
                At our Ganesha Stores website, we believe in the power of creativity and expression through the written word. Our journey began with a simple passion for beautiful paper and elegant pens. From humble beginnings, we've grown into a haven for stationery enthusiasts, offering a curated collection of notebooks, pens, and desk accessories. We're dedicated to providing the highest quality products that inspire imagination and productivity. With a commitment to exceptional customer service, we strive to make every shopping experience delightful and memorable. Join us on our mission to elevate the art of writing and discover the joy of stationery craftsmanship. Welcome to our world of paper dreams and inked possibilities.
                </p>
            </div>
            <div style={{ display: "inline-block", marginTop:'10%' , backgroundColor:"#F5D43E", border: '20px solid #fade0f'}}>
                <p style={{ width:300, fontSize: 25 ,margin:10}}>
                    <b>
                        <img src={img1} style={{width:300,height:500}}></img>
                    </b>
                </p>
            </div>
            <br /><br /><br /><br />
        </>
    )
};
