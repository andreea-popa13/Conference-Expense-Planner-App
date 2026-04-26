import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    	{
		img: "https://m.media-amazon.com/images/I/61Mq+Tp6PxL._AC_UF1000,1000_QL80_.jpg",
		name: "Projectors",
		cost: 200,
		quantity: 0,
	},
    {
		img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
		name: "Speaker",
		cost: 35,
		quantity: 0,
    },
    {
		img: "https://storage.googleapis.com/stateless-blog-g4m-co-uk/2023/11/Featured-image-Different-Types-of-Microphones.jpg",
		name: "Microphones",
		cost: 45,
		quantity: 0,
    },
    {
		img: "https://www.novus-dahle.com/en/wp-content/uploads/MicrosoftTeams-image-135-scaled.jpg",
		name: "Whiteboards",
		cost: 80,
		quantity: 0,
    },

    {
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcNNXxYrrMrbGahuEJdcRWloweNLwCcVA0A&s",
		name: "Signage",
		cost: 80,
		quantity: 0,
    },

    
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item=state[action.payload];
      if(item){
        item.quantity++;
      }

    },
    decrementAvQuantity: (state, action) => {
     const item=state[action.payload];
     if(item && item.quantity>0)
     {
        item.quantity--;
     }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
