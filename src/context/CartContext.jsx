
// import { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// function CartContextProvider({ children }) {
//   const [cartRecipes, setCartRecipes] = useState([]);

//   useEffect(() => {
//     const items = localStorage.getItem("cartRecipes");
//     if (items) {
//       setCartRecipes(JSON.parse(items));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cartRecipes", JSON.stringify(cartRecipes));
//   }, [cartRecipes]);

//   function addToCart(recipe) {
//     setCartRecipes((prevRecipes) => {
//       const recipeIndex = prevRecipes.findIndex((data) => data.id === recipe.id);
//       if (recipeIndex === -1) {
//         return [...prevRecipes, { ...recipe, quantity: 1 }];
//       } else {
//         const updatedRecipes = [...prevRecipes];
//         updatedRecipes[recipeIndex].quantity++;
//         return updatedRecipes;
//       }
//     });
//   }

//   function updateToCart(id, type) {
//     setCartRecipes((prevRecipes) => {
//       const updatedRecipes = [...prevRecipes];
//       const recipeIndex = updatedRecipes.findIndex((data) => data.id === id);
//       if (recipeIndex !== -1) {
//         if (type === "plus") {
//           updatedRecipes[recipeIndex].quantity++;
//         } else {
//           updatedRecipes[recipeIndex].quantity--;
//           // Remove the recipe if quantity is 0
//           if (updatedRecipes[recipeIndex].quantity <= 0) {
//             updatedRecipes.splice(recipeIndex, 1);
//           }
//         }
//       }
//       return updatedRecipes;
//     });
//   }

//   function removeCart(id) {
//     setCartRecipes((prevRecipes) => prevRecipes.filter(recipe => recipe.id !== id));
//   }

//   function clearCart() {
//     setCartRecipes([]);
//   }

//   function isRecipeAdded(id) {
//     return cartRecipes.find((data) => data.id === id) || null;
//   }

//   return (
//     <CartContext.Provider
//       value={{
//         cartRecipes,
//         addToCart,
//         clearCart,
//         updateToCart,
//         isRecipeAdded,
//         removeCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export default CartContextProvider;

// import { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// function CartContextProvider({ children }) {
//   const [cartRecipes, setCartRecipes] = useState([]);

//   useEffect(() => {
//     const items = localStorage.getItem("cartRecipes");
//     if (items) {
//       setCartRecipes(JSON.parse(items));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cartRecipes", JSON.stringify(cartRecipes));
//   }, [cartRecipes]);

//   function addToCart(recipe) {
//     setCartRecipes((prevRecipes) => {
//       const recipeIndex = prevRecipes.findIndex((data) => data.id === recipe.id);
//       if (recipeIndex === -1) {
//         return [...prevRecipes, { ...recipe, quantity: 1 }];
//       } else {
//         const updatedRecipes = [...prevRecipes];
//         updatedRecipes[recipeIndex].quantity++;
//         return updatedRecipes;
//       }
//     });
//   }

//   function updateToCart(id, type) {
//     setCartRecipes((prevRecipes) => {
//       const updatedRecipes = [...prevRecipes];
//       const recipeIndex = updatedRecipes.findIndex((data) => data.id === id);
//       if (recipeIndex !== -1) {
//         if (type === "plus") {
//           updatedRecipes[recipeIndex].quantity++;
//         } else if (type === "minus") {
//           updatedRecipes[recipeIndex].quantity--;
//           if (updatedRecipes[recipeIndex].quantity <= 0) {
//             updatedRecipes.splice(recipeIndex, 1);
//           }
//         }
//       }
//       return updatedRecipes;
//     });
//   }

//   function removeCart(id) {
//     setCartRecipes((prevRecipes) => prevRecipes.filter(recipe => recipe.id !== id));
//   }

//   function clearCart() {
//     setCartRecipes([]);
//   }

//   function isRecipeAdded(id) {
//     return cartRecipes.some((data) => data.id === id);
//   }

//   return (
//     <CartContext.Provider
//       value={{
//         cartRecipes,
//         addToCart,
//         clearCart,
//         updateToCart,
//         isRecipeAdded,
//         removeCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }
// export default CartContextProvider;
    // function addToCart(recipe) {
    //     setCartRecipes((prevRecipes) => {
    //         const recipeIndex = prevRecipes.findIndex((data) => data.id === recipe.id);
    //         if (recipeIndex === -1) {
    //             return [...prevRecipes, { ...recipe, quantity: 1 }];
    //         } else {
    //             const updatedRecipes = [...prevRecipes];
    //             updatedRecipes[recipeIndex].quantity++;
    //             return updatedRecipes;
    //         }
    //     });
    // // }
    // function addToCart(recipe) {
    //     setCartRecipes((prevRecipes) => {
    //         const recipeIndex = prevRecipes.findIndex((data) => data.id === recipe.id);
    //         if (recipeIndex === -1) {
    //             const updatedRecipes = [...prevRecipes, { ...recipe, quantity: 1 }];
    //             console.log('Added to cart:', updatedRecipes);
    //             return updatedRecipes;
    //         } else {
    //             const updatedRecipes = [...prevRecipes];
    //             updatedRecipes[recipeIndex].quantity++;
    //             console.log('Updated cart:', updatedRecipes);
    //             return updatedRecipes;
    //         }
    //     });
    // // }
    // function addToCart(recipe) {
    //     setCartRecipes((prevRecipes) => {
    //         const recipeIndex = prevRecipes.findIndex((data) => data.id === recipe.id);
    //         if (recipeIndex === -1) {
    //             const newRecipes = [...prevRecipes, { ...recipe, quantity: 1 }];
    //             localStorage.setItem("cartRecipes", JSON.stringify(newRecipes)); // Save to local storage
    //             return newRecipes;
    //         } else {
    //             const updatedRecipes = [...prevRecipes];
    //             updatedRecipes[recipeIndex].quantity++;
    //             localStorage.setItem("cartRecipes", JSON.stringify(updatedRecipes)); // Update local storage
    //             return updatedRecipes;
    //         }
    //     });
    // // }
    // function addToCart(recipe) {
    //     setCartRecipes((prevRecipes) => {
    //         const recipeIndex = prevRecipes.findIndex((data) => data.id === recipe.id);
    //         if (recipeIndex === -1) {
    //             const newRecipes = [...prevRecipes, { ...recipe, quantity: 1 }];
    //             console.log("Added to cart:", newRecipes);
    //             localStorage.setItem("cartRecipes", JSON.stringify(newRecipes));
    //             return newRecipes;
    //         } else {
    //             const updatedRecipes = [...prevRecipes];
    //             updatedRecipes[recipeIndex].quantity++;
    //             console.log("Updated cart:", updatedRecipes);
    //             localStorage.setItem("cartRecipes", JSON.stringify(updatedRecipes));
    //             return updatedRecipes;
    //         }
    //     });
    // }
//     function addToCart(recipe) {
//    console.log(recipe)
//         setCartRecipes((prevRecipes) => {
//             const recipeIndex = prevRecipes.findIndex((data) => data.id === recipe.id);
//             if (recipeIndex === -1) {
//                 const newRecipes = [...prevRecipes, { ...recipe, quantity: 1 }];
//                 console.log('Added to cart:', newRecipes); // Log new recipes
//                 return newRecipes;
//             } else {
//                 const updatedRecipes = [...prevRecipes];
//                 updatedRecipes[recipeIndex].quantity++;
//                 console.log('Updated cart:', updatedRecipes); // Log updated recipes
//                 return updatedRecipes;
//             }
//         });
    // // }
    // function addToCart(recipe) {
    //     setCartRecipes((prevRecipes) => {
    //         const recipeIndex = prevRecipes.findIndex((data) => data.id === recipe.id);
    //         let updatedRecipes;
    //         if (recipeIndex === -1) {
    //             updatedRecipes = [...prevRecipes, { ...recipe, quantity: 1 }];
    //         } else {
    //             updatedRecipes = [...prevRecipes];
    //             updatedRecipes[recipeIndex].quantity++;
    //         }
    //         // Update local storage here
    //         localStorage.setItem("cartRecipes", JSON.stringify(updatedRecipes));
    //         console.log('Updated local storage:', updatedRecipes); // Log updated cart
    //         return updatedRecipes;
    //     });
    // }
    
    // console.log(JSON.parse(localStorage.getItem("cartRecipes")));
    // function updateToCart(id, type) {
    //     setCartRecipes((prevRecipes) => {
    //         const updatedRecipes = [...prevRecipes];
    //         const recipeIndex = updatedRecipes.findIndex((data) => data.id === id);
    //         if (recipeIndex !== -1) {
    //             if (type === "plus") {
    //                 updatedRecipes[recipeIndex].quantity++;
    //             } else if (type === "minus") {
    //                 updatedRecipes[recipeIndex].quantity--;
    //                 if (updatedRecipes[recipeIndex].quantity <= 0) {
    //                     updatedRecipes.splice(recipeIndex, 1);
    //                 }
    //             }
    //         }
    //         return updatedRecipes;
    //     });
    // }

    // // function removeCart(id) {
    // //     setCartRecipes((prevRecipes) => prevRecipes.filter(recipe => recipe.id !== id));
    // // }
    // function removeCart(id) {
    //     setCartRecipes((prevRecipes) => {
    //         const updatedRecipes = prevRecipes.filter(recipe => recipe.id !== id);
    //         localStorage.setItem("cartRecipes", JSON.stringify(updatedRecipes)); // Update local storage
    //         return updatedRecipes;
    //     });
    // }
    
    // function clearCart() {
    //     setCartRecipes([]);
    // }

    // function isRecipeAdded(id) {
    //     return cartRecipes.some((data) => data.id === id);
    // }
    // function addToCart(recipe) {
    //     setCartRecipes((prevRecipes) => {
    //         const recipeIndex = prevRecipes.findIndex((data) => data.id === recipe.id);
    //         let updatedRecipes;
    
    //         if (recipeIndex === -1) {
    //             // If recipe is not in the cart, add it with quantity 1
    //             updatedRecipes = [...prevRecipes, { ...recipe, quantity: 1 }];
    //         } else {
    //             // If recipe is already in the cart, increment its quantity
    //             updatedRecipes = [...prevRecipes];
    //             updatedRecipes[recipeIndex].quantity++;
    //         }
    
    //         // Update local storage
    //         localStorage.setItem("cartRecipes", JSON.stringify(updatedRecipes));
    //         console.log('Updated local storage:', updatedRecipes); // Log updated cart
    //         return updatedRecipes;
    //     });
    // }
    import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
    const [cartRecipes, setCartRecipes] = useState([]);

    useEffect(() => {
        const items = localStorage.getItem("cartRecipes");
        if (items) {
            const parsedItems = JSON.parse(items);
            console.log("Loaded cart from local storage:", parsedItems);
            setCartRecipes(parsedItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartRecipes", JSON.stringify(cartRecipes));
    }, [cartRecipes]);

    const addToCart = (recipe) => {
        const price = typeof recipe.price === 'number' ? recipe.price : 0; // Ensure it's a number
        const cartItem = {
            ...recipe,
            quantity: 1,
            price: recipe.price || recipe.caloriesPerServing || 0, // Ensure this is the correct price field
        };

        setCartRecipes((prevCart) => {
            const existingItem = prevCart.find(item => item.id === recipe.id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === recipe.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, cartItem];
            }
        });
    };

    function updateToCart(id, type) {
        setCartRecipes((prevRecipes) => {
            const updatedRecipes = [...prevRecipes];
            const recipeIndex = updatedRecipes.findIndex((data) => data.id === id);

            if (recipeIndex !== -1) {
                if (type === "plus") {
                    updatedRecipes[recipeIndex].quantity++;
                } else if (type === "minus") {
                    updatedRecipes[recipeIndex].quantity--;
                    if (updatedRecipes[recipeIndex].quantity <= 0) {
                        updatedRecipes.splice(recipeIndex, 1);
                    }
                }
            }

            localStorage.setItem("cartRecipes", JSON.stringify(updatedRecipes));
            return updatedRecipes;
        });
    }

    function removeCart(id) {
        setCartRecipes((prevRecipes) => {
            const updatedRecipes = prevRecipes.filter(recipe => recipe.id !== id);
            localStorage.setItem("cartRecipes", JSON.stringify(updatedRecipes));
            return updatedRecipes;
        });
    }

    function clearCart() {
        setCartRecipes([]);
        localStorage.removeItem("cartRecipes");
    }

    return (
        <CartContext.Provider
            value={{
                cartRecipes,
                addToCart,
                clearCart,
                updateToCart,
                removeCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
