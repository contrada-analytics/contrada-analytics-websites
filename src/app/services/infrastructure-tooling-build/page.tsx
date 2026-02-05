import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Infrastructure & Tooling Build | DataArk Labs",
  description: "Cloud architecture, data platform implementation, ingestion pipelines, transformation layers, CI/CD, and security frameworks. The technical backbone that makes everything else possible.",
  keywords: ["data infrastructure", "cloud data platform", "data engineering", "Snowflake", "Databricks", "BigQuery", "data pipelines", "dbt"],
  openGraph: {
    title: "Infrastructure & Tooling Build | DataArk Labs",
    description: "The technical foundation everything else depends on. Cloud architecture, data platforms, and DevOps for CPG and retail.",
    type: "website",
  },
}

export default function InfrastructureToolingBuildPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl font-bold text-white/20">02</span>
            <h1 className="text-4xl md:text-5xl font-bold">Infrastructure & Tooling Build</h1>
          </div>
          <p className="text-xl italic text-[#87CEEB] mb-4">The technical foundation everything else depends on</p>
          <p className="text-xl opacity-95 max-w-3xl">
            Cloud architecture, data platform implementation, ingestion pipelines, transformation layers, CI/CD, and security frameworks. The technical backbone that makes everything else possible.
          </p>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-12 bg-gray-50 border-l-4 border-[#2E74B5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-4 text-[#0F1B2D]">TL;DR</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#2E74B5] font-bold mr-3">→</span>
                <span><strong>What:</strong> Cloud architecture + data platform + pipelines + transformations + CI/CD + security framework</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2E74B5] font-bold mr-3">→</span>
                <span><strong>Impact:</strong> A modern, scalable technical foundation that can handle whatever you throw at it</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2E74B5] font-bold mr-3">→</span>
                <span><strong>Timeline:</strong> 8-16 weeks depending on scope and complexity</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0F1B2D]">Build It Right the First Time</h2>
              <p className="text-gray-600 mb-4">
                Too many data initiatives fail because they're built on shaky foundations. Teams spend months building dashboards on top of fragmented data sources, manual pipelines, and ad-hoc infrastructure—then wonder why nothing scales.
              </p>
              <p className="text-gray-600 mb-4">
                We build the technical backbone that makes everything else possible. Modern cloud architecture, reliable data pipelines, transformation layers that actually work, and security frameworks that protect without constraining.
              </p>
              <p className="text-gray-600">
                The result: infrastructure that scales with your business, supports your analytics needs, and doesn't require a full-time engineering team to maintain.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#0F1B2D]">Key Deliverables</h3>
              <ul className="space-y-3">
                {[
                  "Cloud architecture design (AWS/Azure/GCP)",
                  "Data platform implementation (Snowflake/Databricks/BigQuery)",
                  "Ingestion pipeline setup (batch and streaming)",
                  "Transformation layer (dbt or equivalent)",
                  "CI/CD pipeline for data workflows",
                  "Security framework (RBAC, encryption, audit logging)",
                  "Build vs buy matrix for tooling decisions",
                  "Runbook documentation and knowledge transfer"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1B2D]">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Platforms",
                items: ["AWS", "Azure", "Google Cloud Platform"],
                description: "We design for your cloud of choice, leveraging native services where they add value"
              },
              {
                title: "Data Platforms",
                items: ["Snowflake", "Databricks", "BigQuery", "Redshift"],
                description: "Modern data warehouses and lakehouses built for analytics workloads"
              },
              {
                title: "Ingestion & Orchestration",
                items: ["Fivetran", "Airbyte", "Apache Airflow", "Dagster"],
                description: "Reliable data pipelines that run on schedule and alert when something's wrong"
              },
              {
                title: "Transformation",
                items: ["dbt", "Spark", "SQL-based ELT"],
                description: "Version-controlled transformations with testing and documentation built in"
              },
              {
                title: "CI/CD & DevOps",
                items: ["GitHub Actions", "GitLab CI", "Terraform", "Pulumi"],
                description: "Infrastructure as code and automated deployments for reliability"
              },
              {
                title: "Security & Governance",
                items: ["RBAC", "Column-level security", "Audit logging", "Encryption"],
                description: "Enterprise-grade security that meets compliance requirements"
              }
            ].map((stack, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#0F1B2D]">{stack.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {stack.items.map((item, idx) => (
                    <span key={idx} className="bg-[#2E74B5]/10 text-[#2E74B5] px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{stack.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1B2D]">What You'll Walk Away With</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Scalable Foundation",
                description: "Infrastructure that grows with your data volumes and analytics needs without requiring constant re-architecture."
              },
              {
                title: "Operational Excellence",
                description: "Automated pipelines, monitoring, alerting, and runbooks so your team can focus on value-add work instead of firefighting."
              },
              {
                title: "Knowledge Transfer",
                description: "Your team trained and equipped to operate and extend the platform. We build with you, not just for you."
              }
            ].map((outcome, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#2E74B5]">
                <h3 className="text-xl font-semibold mb-3 text-[#0F1B2D]">{outcome.title}</h3>
                <p className="text-gray-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Engagement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F] text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { phase: "Week 1-2", title: "Architecture", description: "Requirements, design decisions, technology selection" },
                { phase: "Week 3-8", title: "Build", description: "Infrastructure provisioning, pipeline development, security setup" },
                { phase: "Week 9-12", title: "Integration", description: "Data source connections, transformation logic, testing" },
                { phase: "Week 13-16", title: "Handover", description: "Documentation, training, operational readiness" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm text-[#87CEEB] mb-2">{step.phase}</div>
                  <div className="text-xl font-bold mb-2">{step.title}</div>
                  <div className="text-gray-200 text-sm">{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Technical Foundation?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's discuss your infrastructure needs and design a platform that scales with your business.
          </p>
          <Button asChild size="lg" className="bg-white text-[#0F1B2D] hover:bg-gray-100 rounded-full text-lg px-8 py-6">
            <Link href="/#contact">Book a 30-Minute Call</Link>
          </Button>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}
