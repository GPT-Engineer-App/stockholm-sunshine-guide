import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Landmark, Utensils, Calendar, Train, BedDouble } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Stockholm</h1>
        <p className="text-xl text-muted-foreground">Discover the Venice of the North</p>
      </header>

      <section className="mb-12">
        <img src="/placeholder.svg" alt="Stockholm cityscape" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Visit Stockholm?</h2>
        <p className="text-lg mb-4">
          Stockholm, the capital of Sweden, is a city of stunning beauty, rich history, and modern innovation. 
          Spread across 14 islands, it offers a unique blend of urban life and natural landscapes.
        </p>
        <Button variant="default" className="bg-blue-500 hover:bg-blue-600">Plan Your Trip</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <FeatureCard
          icon={<MapPin className="h-6 w-6" />}
          title="14 Islands"
          description="Explore the archipelago that makes up the city"
        />
        <FeatureCard
          icon={<Landmark className="h-6 w-6" />}
          title="Rich History"
          description="Discover medieval streets and world-class museums"
        />
        <FeatureCard
          icon={<Utensils className="h-6 w-6" />}
          title="Culinary Delights"
          description="Savor Swedish cuisine and fika culture"
        />
        <FeatureCard
          icon={<Calendar className="h-6 w-6" />}
          title="Year-round Beauty"
          description="Experience the midnight sun and magical winters"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Top Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AttractionCard
            image="/placeholder.svg"
            title="Vasa Museum"
            description="Home to a 17th-century warship"
            link="/vasa-museum"
          />
          <AttractionCard
            image="/placeholder.svg"
            title="Gamla Stan"
            description="Stockholm's charming old town"
          />
          <AttractionCard
            image="/placeholder.svg"
            title="Royal Palace"
            description="Official residence of the Swedish monarch"
          />
          <AttractionCard
            image="/placeholder.svg"
            title="Skansen"
            description="World's oldest open-air museum"
          />
          <AttractionCard
            image="/placeholder.svg"
            title="ABBA The Museum"
            description="Interactive exhibit dedicated to the iconic Swedish pop group"
          />
          <AttractionCard
            image="/placeholder.svg"
            title="Fotografiska"
            description="Contemporary photography museum with stunning views"
          />
          <AttractionCard
            image="/placeholder.svg"
            title="Gröna Lund"
            description="Stockholm's historic amusement park with thrilling rides"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Plan Your Visit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Getting Around</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Stockholm has an excellent public transportation system, including buses, trains, and ferries. Consider purchasing a Stockholm Pass for unlimited travel and free entry to many attractions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Where to Stay</CardTitle>
            </CardHeader>
            <CardContent>
              <p>From luxury hotels to cozy hostels, Stockholm offers accommodations for every budget. Popular areas include Norrmalm, Östermalm, and Södermalm.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const AttractionCard = ({ image, title, description, link }) => (
  <Card>
    <img src={image} alt={title} className="mx-auto object-cover w-full h-[200px]" />
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
      {link && (
        <Button variant="link" className="mt-2 p-0" onClick={() => window.location.href = link}>
          Learn More
        </Button>
      )}
    </CardContent>
  </Card>
);

export default Index;
