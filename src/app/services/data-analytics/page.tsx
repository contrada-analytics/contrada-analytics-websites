import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Pipeline Development & Analytics for CPG",
  description: "Transform messy data into actionable insights with automated pipelines and advanced analytics. Product-led approach to data infrastructure and analytics for CPG brands.",
  keywords: ["data pipeline development", "CPG analytics", "data transformation", "advanced analytics", "data infrastructure", "business intelligence CPG"],
  openGraph: {
    title: "Data Pipeline Development & Analytics for CPG",
    description: "Transform messy, unstructured data into clean, actionable insights with automated pipelines and advanced analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Pipeline Development & Analytics for CPG",
    description: "Transform messy, unstructured data into clean, actionable insights with automated pipelines and advanced analytics.",
  },
}

export default function DataAnalyticsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Pipeline Development & Analytics</h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Using a product-led approach to transform messy, unstructured data into clean, actionable insights with automated 
            pipelines and advanced analytics that drive informed decision-making.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#08314d]">Unlock the Power of Your Data</h2>
              <p className="text-gray-600 mb-4">
                We help businesses transform raw data into meaningful insights through advanced analytics, 
                visualization, and reporting solutions. Our data analytics services enable you to make 
                data-driven decisions with confidence.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>But here's the key:</strong> Great analytics starts with the right data foundation. 
                Most clients come to us wanting just a simple reporting dashboard but leave with a fully 
                developed data infrastructure—scalable, secure, and modular pipelines built on proven frameworks 
                that are ready to support a variety of complex use cases, both now and into the future.
              </p>
              <p className="text-gray-600 mb-4">
                This foundation is especially critical as businesses explore AI and machine learning. AI models 
                are only as good as the data they're trained on—without clean, well-structured data pipelines 
                and robust governance, AI initiatives fail before they start. That's why we don't just create 
                dashboards; we architect flexible data foundations using framework-driven approaches that power 
                your immediate analytics needs while preparing you for advanced AI applications and tomorrow's challenges.
              </p>
              <p className="text-gray-600">
                Our methodology combines robust pipeline engineering with advanced analytics capabilities. From 
                building custom dashboards to implementing predictive models, we deliver end-to-end solutions 
                that provide real-time visibility into your business performance. <em>Learn more about building 
                a future-proof data foundation below.</em>
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#08314d]">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Make faster, data-driven decisions",
                  "Identify trends and opportunities",
                  "Improve forecasting accuracy",
                  "Monitor KPIs in real-time",
                  "Reduce reporting time by 80%"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Custom-Built Data Pipelines",
                description: "Transform messy, unstructured data into clean, reliable insights with scalable and secure data pipelines. We build custom ETL/ELT processes that automatically clean, transform, and centralize your data from multiple sources. Our pipelines are designed for reliability, scalability, and security—handling everything from real-time streaming data to large batch processes.\n\nFor those not bound by existing infrastructure or tech stack constraints, we can build and deploy pipelines on our own proven infrastructure—delivering fully managed, production-ready solutions in record time. You get immediate value without the overhead of infrastructure decisions, and can always migrate to your own environment later as your needs evolve.\n\nFor those of you who do have a pre-existing tech stack, we work within it. Whether that's Python-based frameworks (Airflow, Prefect), cloud-native tools (AWS Glue, Azure Data Factory), or modern data platforms (dbt, Fivetran), we leverage what you already have and fill the gaps where needed. Our framework-driven approach and reusable components mean we can build production-ready pipelines in record speed—often delivering in weeks what traditionally takes months. Either way, this approach minimizes disruption, reduces costs, and ensures maintainability."
              },
              {
                title: "Data Warehouse Design & Implementation",
                description: "Centralize all your business data into a unified, optimized data warehouse. We design and implement modern data warehouse solutions that serve as your single source of truth. Whether cloud-based (Snowflake, BigQuery, Redshift) or on-premise, we architect warehouses that support fast queries, complex analytics, and seamless integration with your BI tools.\n\nWe take a product-led approach to data architecture, treating your data warehouse as a collection of 'data products'—well-defined, reusable datasets that serve specific business needs. Each data product is owned, documented, and maintained with clear quality standards, making it easy for different teams to discover and use the data they need. This approach transforms your warehouse from a technical storage solution into a strategic asset that scales with your organization and enables self-service analytics across teams."
              },
              {
                title: "Custom Business Intelligence Dashboards",
                description: "Get real-time visibility into your business with custom-built BI dashboards tailored to your specific KPIs and metrics. We don't use generic templates—every dashboard is designed around your unique business needs, with real-time alerts and notifications to keep you informed of critical changes.\n\nWhether you need custom-built visualizations or want to leverage your existing tools like Power BI, Tableau, or Looker, we have the expertise to integrate seamlessly with your current suite of dashboards. Need to add a Power BI dashboard to your existing analytics stack? We'll build it to work harmoniously with your other tools while maintaining data consistency across platforms."
              },
              {
                title: "ML Models & LLM Adaptation",
                description: "Leverage the power of machine learning and large language models for predictive and prescriptive analytics. We take a pragmatic approach: adapt proven, pre-trained models from the marketplace when they fit your needs, or build custom ML models from scratch when your use case demands it.\n\nFor many applications—forecasting, classification, anomaly detection, and natural language processing—adapting existing models (like GPT, Claude, or specialized ML models) is faster, more cost-effective, and leverages years of training on massive datasets. We fine-tune and customize these models for your specific use cases, from customer insights to automated decision-making.\n\nWhen off-the-shelf solutions don't fit, we design and train custom ML models tailored to your unique data and business requirements. Either way, we turn your historical data into future predictions and actionable recommendations that drive real business value."
              },
              {
                title: "Flexible Deployment Options",
                description: "Choose where your analytics infrastructure lives. Deploy in your own environment for maximum control, compliance, and data sovereignty, or leverage our secure cloud infrastructure for hassle-free management and automatic scaling. We adapt to your security requirements, compliance needs, and infrastructure preferences.\n\nMany clients start with our infrastructure to get up and running quickly, then migrate to their own environment as their team grows and internal capabilities mature. This phased approach lets you deliver value immediately while building toward long-term ownership—without having to rebuild everything from scratch when you're ready to transition."
              },
              {
                title: "Advanced Analytics & Insights",
                description: "Go beyond basic reporting with advanced analytics capabilities. We implement cohort analysis, customer segmentation, attribution modeling, and predictive analytics to uncover hidden patterns and opportunities in your data. Our solutions provide not just what happened, but why it happened and what's likely to happen next."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#08314d]">{service.title}</h3>
                <div className="text-gray-600">
                  {service.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className={idx > 0 ? 'mt-3' : ''}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Foundation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#08314d]">Building a Future-Proof Data Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A solid data foundation is the key to unlocking multiple use cases—from analytics to AI—without rebuilding from scratch
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#08314d]">Why Data Foundation Matters</h3>
              <p className="text-gray-600 mb-4">
                Most businesses start with immediate needs—a dashboard here, a report there. But without a proper foundation, 
                each new use case requires rebuilding infrastructure, leading to data silos, inconsistencies, and mounting technical debt.
              </p>
              <p className="text-gray-600 mb-4">
                We build data foundations that are <strong>scalable, flexible, and future-proof</strong>. Whether you need basic 
                reporting today or advanced AI tomorrow, your infrastructure is ready to support it without major rework.
              </p>
              <p className="text-gray-600">
                Think of it as building a house with a strong foundation—you can add rooms, renovate, and expand without 
                tearing down walls. Your data infrastructure should work the same way.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#08314d] to-[#1a4a6b] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">What a Proper Foundation Enables</h3>
              <ul className="space-y-4">
                {[
                  "Start with dashboards, scale to predictive analytics",
                  "Add new data sources without rebuilding pipelines",
                  "Support multiple teams and use cases simultaneously",
                  "Maintain data quality and governance at scale",
                  "Integrate AI/ML models when you're ready",
                  "Comply with data regulations and security requirements",
                  "Reduce long-term costs by avoiding technical debt"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-[#08314d] text-center">Our Data Foundation Approach</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Assess & Plan",
                  description: "Understand your current state, future needs, and design a scalable architecture"
                },
                {
                  step: "2",
                  title: "Build Core Infrastructure",
                  description: "Implement data pipelines, warehouse, and governance frameworks"
                },
                {
                  step: "3",
                  title: "Deliver Initial Use Cases",
                  description: "Start with high-value dashboards or analytics to show immediate ROI"
                },
                {
                  step: "4",
                  title: "Scale & Evolve",
                  description: "Add new capabilities as needs grow—ML, AI, advanced analytics"
                }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#673DE6] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h4 className="font-semibold mb-2 text-[#08314d]">{phase.title}</h4>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sales Analytics",
                items: ["Revenue tracking", "Sales pipeline analysis", "Customer acquisition metrics", "Performance dashboards"]
              },
              {
                title: "Marketing Analytics",
                items: ["Campaign performance", "ROI tracking", "Customer journey analysis", "Attribution modeling"]
              },
              {
                title: "Operations Analytics",
                items: ["Process efficiency", "Resource utilization", "Quality metrics", "Supply chain visibility"]
              },
              {
                title: "Financial Analytics",
                items: ["P&L analysis", "Cash flow forecasting", "Budget vs actual", "Financial KPIs"]
              }
            ].map((useCase, index) => (
              <div key={index} className="border-l-4 border-[#673DE6] pl-6">
                <h3 className="text-xl font-semibold mb-4 text-[#08314d]">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#673DE6] mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's discuss how data pipelines and analytics can drive better business decisions.
          </p>
          <Button asChild size="lg" className="bg-white text-[#08314d] hover:bg-gray-100 rounded-full text-lg px-8 py-6">
            <Link href="/#contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}
