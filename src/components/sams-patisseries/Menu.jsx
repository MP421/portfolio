import React from 'react'

const Menu = () => {
  return (
    <section className="w-full mt-32">
      <div className="w-[75%] bg-yellow-500 flex flex-col items-center justify-between mx-auto rounded-3xl py-14 px-32">
        <p className="text-lg font-medium border-b-4 border-orange-50 pb-3 mb-8">Full Menu</p>
        <div className="p-6 bg-orange-50 rounded-2xl mb-10">
          <p className="text-lg font-medium">Signature Cakes</p>
          <div className="mt-4 mb-3">
            <p className="font-semibold">La Crème Brûlée</p>
            <p className="tracking-wide">A delicate vanilla bean-infused custard layered with caramelized sugar and adorned with a golden, crackling caramel top.</p>
          </div>
          <div className="mt-4 mb-3">
            <p className="font-semibold">Chocolat Noir</p>
            <p className="tracking-wide">Decadent layers of rich dark chocolate ganache and velvety chocolate mousse, enrobed in a glossy dark chocolate glaze.</p>
          </div>
          <div className="mt-4 mb-3">
            <p className="font-semibold">Framboise Rouge</p>
            <p className="tracking-wide">A symphony of flavors featuring layers of light almond sponge cake, raspberry confit, and smooth vanilla mousseline cream, crowned with fresh raspberries.</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Citron Élégance</p>
            <p className="tracking-wide">A tangy delight blending layers of zesty lemon cream, buttery almond dacquoise, and a vibrant lemon glaze, creating a perfect balance of sweet and tart.</p>
          </div>
        </div>
        <div className="p-6 bg-orange-50 rounded-2xl mb-10">
          <p className="text-lg font-medium">Individual Delights</p>
          <div className="mt-4 mb-3">
            <p className="font-semibold">Éclair d'Or</p>
            <p className="tracking-wide">A classic French choux pastry filled with luscious Madagascar vanilla cream and glazed with a velvety layer of caramel.</p>
          </div>
          <div className="mt-4 mb-3">
            <p className="font-semibold">Macarons Assortis</p>
            <p className="tracking-wide">An assortment of delicate, colorful macarons in flavors such as pistachio, rose, salted caramel, and passion fruit, offering a harmonious blend of crisp shells and smooth fillings.</p>
          </div>
          <div className="mt-4 mb-3">
            <p className="font-semibold">Tartelette aux Fruits</p>
            <p className="tracking-wide">A buttery pastry shell filled with vanilla cream and crowned with a vibrant medley of seasonal fruits, creating a stunning visual display.</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Mille-Feuille Caramel</p>
            <p className="tracking-wide">Layers of flaky puff pastry, caramelized to perfection, and filled with luscious caramel cream, creating a textural masterpiece.</p>
          </div>
        </div>
        <div className="p-6 bg-orange-50 rounded-2xl mb-10">
          <p className="text-lg font-medium">Delicate Pastries</p>
          <div className="mt-4 mb-3">
            <p className="font-semibold">Paris-Brest</p>
            <p className="tracking-wide">A classic French pastry featuring a ring of light and airy choux pastry, filled with a velvety praline cream and sprinkled with toasted almonds.</p>
          </div>
          <div className="mt-4 mb-3">
            <p className="font-semibold">Opera</p>
            <p className="tracking-wide">A refined creation layering almond sponge cake, coffee-infused buttercream, and dark chocolate ganache, all topped with a delicate chocolate glaze.</p>
          </div>
          <div className="mt-4 mb-3">
            <p className="font-semibold">Pain au Chocolat</p>
            <p className="tracking-wide">A buttery, flaky croissant dough wrapped around premium dark chocolate, creating a luxurious treat for chocolate enthusiasts.</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Croissant aux Amandes</p>
            <p className="tracking-wide">A traditional croissant filled with almond frangipane and topped with a generous dusting of powdered sugar, delivering a delightful nutty flavor.</p>
          </div>
        </div>
        <div className="p-6 bg-orange-50 rounded-2xl">
          <p className="text-lg font-medium">Beverages</p>
          <div className="mt-4 mb-3">
            <p className="font-semibold">Café au Chocolat</p>
            <p className="tracking-wide">A velvety blend of rich espresso and smooth, melted chocolate, creating a luxurious and indulgent coffee experience.</p>
          </div>
          <div className="mt-4 mb-3">
            <p className="font-semibold">Thé des Gourmets</p>
            <p className="tracking-wide">An exclusive selection of premium loose-leaf teas, sourced from the finest gardens around the world, offering a refined and aromatic journey.</p>
          </div>
          <div className="mt-4 mb-3">
            <p className="font-semibold">Jus de Fruits Frais</p>
            <p className="tracking-wide">Freshly squeezed juices bursting with vibrant flavors, including orange, grapefruit, and mixed berry combinations, to complement the pastry experience.</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Note: Our menu is subject to seasonal changes, as we strive to incorporate the freshest and finest ingredients into our creations. Please inquire about our daily specials and limited-edition offerings when you visit Sam’s Patisseries.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
