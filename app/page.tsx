import Link from "next/link"
import Image from "next/image"
import { Book, Users, MessageSquare, ArrowRight, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background relative">
      {/* Patrones decorativos de fondo */}
      <div
        className="absolute top-0 left-0 w-32 h-32 bg-contain bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/placeholder.svg?height=150&width=150')" }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-32 h-32 bg-contain bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/placeholder.svg?height=150&width=150')" }}
        aria-hidden="true"
      ></div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/logo-artesanal1.jpg"
                width={40}
                height={40}
                alt="Logo artesanal de Voces Ancestrales"
                className="rounded-full"
              />
            </div>
            <span className="text-xl font-bold text-primary">Voces Ancestrales</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium text-primary hover:text-primary/80">
              Inicio
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Lenguas
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Cursos
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Acerca de
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Contacto
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            Menú
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section con patrón artesanal */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/20 to-accent/20 relative overflow-hidden">
          {/* Patrones decorativos */}
          <div
            className="absolute top-0 left-0 w-full h-8 bg-repeat-x"
            style={{ backgroundImage: "url('/patron-zigzag.svg')" }}
            aria-hidden="true"
          ></div>
          <div
            className="absolute bottom-0 left-0 w-full h-8 bg-repeat-x"
            style={{ backgroundImage: "url('/patron-zigzag.svg')" }}
            aria-hidden="true"
          ></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block bg-accent/20 px-3 py-1 text-sm rounded-full border-2 border-accent mb-2">
                  Patrimonio Cultural
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                  Aprende, preserva y comparte las lenguas indígenas de México
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Descubre la riqueza cultural y lingüística de los pueblos originarios de México a través de nuestra
                  plataforma educativa interactiva.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-primary hover:bg-primary/90">Comenzar ahora</Button>
                  <Button variant="outline">Conocer más</Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative aspect-square md:aspect-[4/3] overflow-hidden rounded-xl border-4 border-accent/50">
                <Image
                  src="/hero-1.jpg"
                  width={550}
                  height={550}
                  alt="Ilustración artesanal representando la diversidad cultural de México"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lenguas Indígenas Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          {/* Elemento decorativo */}
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-64 opacity-10 bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/decoracion-vertical.svg')" }}
            aria-hidden="true"
          ></div>
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-64 opacity-10 bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/decoracion-vertical.svg')" }}
            aria-hidden="true"
          ></div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Explora Nuestras Lenguas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre la diversidad lingüística de México con nuestros cursos especializados
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Náhuatl */}
              <Card className="border-2 border-accent hover:border-primary transition-colors overflow-hidden">
                <div className="h-2 bg-primary w-full"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-primary">Náhuatl</CardTitle>
                  <CardDescription>Lengua de los aztecas</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="relative rounded-lg overflow-hidden border-2 border-accent/30">
                    <Image
                      src="/nahuatl-ilustracion.svg"
                      width={350}
                      height={200}
                      alt="Ilustración artesanal de la cultura Náhuatl con símbolos aztecas"
                      className="rounded-lg object-cover w-full h-[150px]"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Aprende la lengua con mayor número de hablantes entre las lenguas indígenas de México.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Explorar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Mixteco */}
              <Card className="border-2 border-accent hover:border-primary transition-colors overflow-hidden">
                <div className="h-2 bg-destructive w-full"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-primary">Mixteco</CardTitle>
                  <CardDescription>Lengua de la Mixteca</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="relative rounded-lg overflow-hidden border-2 border-accent/30">
                    <Image
                      src="/mixteco-ilustracion.svg"
                      width={350}
                      height={200}
                      alt="Ilustración artesanal de la cultura Mixteca con patrones tradicionales"
                      className="rounded-lg object-cover w-full h-[150px]"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Sumérgete en la rica tradición oral y escrita de la cultura mixteca.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Explorar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Zapoteco */}
              <Card className="border-2 border-accent hover:border-primary transition-colors overflow-hidden">
                <div className="h-2 bg-turquoise w-full"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-primary">Zapoteco</CardTitle>
                  <CardDescription>Lengua de Oaxaca</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="relative rounded-lg overflow-hidden border-2 border-accent/30">
                    <Image
                      src="/zapoteco-ilustracion.svg"
                      width={350}
                      height={200}
                      alt="Ilustración artesanal de la cultura Zapoteca con motivos de Monte Albán"
                      className="rounded-lg object-cover w-full h-[150px]"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Conoce una de las lenguas con mayor diversidad dialectal de México.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Explorar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="mt-4 border-2">
                Ver todas las lenguas <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Beneficios Section con patrón artesanal de fondo */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted relative">
          <div
            className="absolute inset-0 opacity-5 bg-repeat"
            style={{ backgroundImage: "url('/patron-tejido.svg')" }}
            aria-hidden="true"
          ></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Beneficios de Aprender Lenguas Indígenas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre por qué es importante preservar y aprender las lenguas originarias
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border-2 border-primary/20 p-6 shadow-sm bg-background">
                <div className="rounded-full bg-primary p-3 border-2 border-accent">
                  <Book className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary">Preservación Cultural</h3>
                <div className="w-12 h-1 bg-accent my-2"></div>
                <p className="text-center text-muted-foreground">
                  Contribuye a mantener vivo el patrimonio lingüístico y cultural de México.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-2 border-primary/20 p-6 shadow-sm bg-background">
                <div className="rounded-full bg-primary p-3 border-2 border-accent">
                  <MessageSquare className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary">Comunicación Auténtica</h3>
                <div className="w-12 h-1 bg-accent my-2"></div>
                <p className="text-center text-muted-foreground">
                  Conecta de manera genuina con comunidades indígenas y su cosmovisión.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-2 border-primary/20 p-6 shadow-sm bg-background">
                <div className="rounded-full bg-primary p-3 border-2 border-accent">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary">Comunidad Diversa</h3>
                <div className="w-12 h-1 bg-accent my-2"></div>
                <p className="text-center text-muted-foreground">
                  Forma parte de una comunidad comprometida con la diversidad lingüística.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action con elementos decorativos */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div
            className="absolute top-0 left-0 w-full h-6 bg-repeat-x"
            style={{ backgroundImage: "url('/patron-ondas.svg')" }}
            aria-hidden="true"
          ></div>
          <div
            className="absolute bottom-0 left-0 w-full h-6 bg-repeat-x"
            style={{ backgroundImage: "url('/patron-ondas.svg')" }}
            aria-hidden="true"
          ></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-xl border border-accent/20">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Image
                  src="/decoracion-flor.svg"
                  width={60}
                  height={60}
                  alt="Decoración floral artesanal"
                  className="opacity-80"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Únete a Nuestra Comunidad
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comienza tu viaje de aprendizaje y contribuye a la preservación de las lenguas indígenas
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-primary hover:bg-primary/90 border-2 border-primary">Registrarse Gratis</Button>
                <Button variant="outline" className="border-2">
                  Conocer los Planes
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer con elementos artesanales */}
      <footer className="w-full border-t bg-background py-6 md:py-12 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-destructive"></div>

        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo-artesanal.svg"
                  width={30}
                  height={30}
                  alt="Logo artesanal de Voces Ancestrales"
                  className="rounded-full"
                />
              </div>
              <span className="text-lg font-bold text-primary">Voces Ancestrales</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left italic">
              "Unidos por la diversidad lingüística"
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary border border-accent/20"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary border border-accent/20"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary border border-accent/20"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary border border-accent/20"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-end">
            <nav className="flex gap-4 sm:gap-6">
              <Link href="#" className="text-xs hover:underline underline-offset-4">
                Términos
              </Link>
              <Link href="#" className="text-xs hover:underline underline-offset-4">
                Privacidad
              </Link>
              <Link href="#" className="text-xs hover:underline underline-offset-4">
                Contacto
              </Link>
            </nav>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Voces Ancestrales. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
