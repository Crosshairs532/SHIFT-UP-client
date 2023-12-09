/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

const Eachproduct = ({ product, setProducts, allProducts }) => {
    const { Bname, Cname, image, Ctype } = product;
    console.log(product);
    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://shift-up-server-59ij4ja0d-md-samsul-areifns-projects.vercel.app/addedtocart/${id}`,
            {
                method: "DELETE"
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {




                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Deleted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    const filtered = allProducts.filter(i => i._id != id);
                    setProducts(filtered)

                }
            })
    }
    return (
        <div>
            <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Bname}</h2>
                    <p>{Cname}</p>
                    <p>{Ctype}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(product._id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Eachproduct;