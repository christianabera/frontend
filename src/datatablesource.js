
export const userColumns = [
  { field: "CuponNo", headerName: "Cupon No", width: 110 },
  {
    field: "user",
    headerName: "User",
    width: 110,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "FullName",
    headerName: "Full Name",
    width: 230,
  },

  {
    field: "Phone",
    headerName: "Phone",
    width: 160,
  },
  {
    field: "Status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.Status}`}>
          {params.row.Status}
        </div>
      );
    },
  },
];

//temporary data


export const productColumns = [
  { field: "id", headerName: "ID", width: 110 },
  {
    field: "img",
    headerName: "Product",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="" />
          {params.row.Product}
        </div>
      );
    },
  },
  {
    field: "Description",
    headerName: "Description",
    width: 230,
  },

  {
    field: "Catagory",
    headerName: "Catagory",
    width: 160,
  },
  {
    field: "Price",
    headerName: "Price",
    width: 160,   
  },
   
];

//temporary data

