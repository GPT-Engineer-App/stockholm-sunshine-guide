import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VasaMuseum = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Vasa Museum</h1>
        <p className="text-xl text-muted-foreground">Home to a beautiful 17th-century warship</p>
      </header>

      <section className="mb-12">
        <img src="/placeholder.svg" alt="Vasa Museum" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About the Vasa Museum</h2>
        <p className="text-lg mb-4">
          The Vasa Museum is one of Scandinavia's most visited museums and houses the world's only preserved 17th-century ship. 
          The warship Vasa sank on its maiden voyage in 1628 and was salvaged in 1961, beautifully preserved by the Baltic Sea.
        </p>
        <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white">Book Tickets</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Opening Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Open daily: 10:00 AM - 5:00 PM</p>
            <p>Wednesdays: 10:00 AM - 8:00 PM</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Admission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Adults: 170 SEK</p>
            <p>Up to 18 years: Free</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default VasaMuseum;
