'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function CertificatesSection() {
  const certificates = [
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      status: 'In Progress',
      progress: 75,
      description: 'Foundational cybersecurity certification covering network security, compliance, and operational security.',
      color: 'from-blue-500 to-blue-600',
      statusColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      expectedDate: 'March 2024'
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      status: 'Planned',
      progress: 25,
      description: 'Advanced certification in ethical hacking methodologies and penetration testing techniques.',
      color: 'from-purple-500 to-purple-600',
      statusColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      expectedDate: 'June 2024'
    },
    {
      name: 'CISSP',
      issuer: 'ISC²',
      status: 'Future Goal',
      progress: 10,
      description: 'Premier certification for cybersecurity professionals in security and risk management.',
      color: 'from-pink-500 to-pink-600',
      statusColor: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      expectedDate: '2025'
    },
    {
      name: 'OSCP',
      issuer: 'Offensive Security',
      status: 'Studying',
      progress: 40,
      description: 'Hands-on penetration testing certification with practical lab environment.',
      color: 'from-green-500 to-green-600',
      statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      expectedDate: 'August 2024'
    },
    {
      name: 'AWS Security Specialty',
      issuer: 'Amazon Web Services',
      status: 'Planned',
      progress: 15,
      description: 'Cloud security certification focusing on AWS security services and best practices.',
      color: 'from-orange-500 to-orange-600',
      statusColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      expectedDate: 'September 2024'
    },
    {
      name: 'GCIH',
      issuer: 'SANS/GIAC',
      status: 'Future Goal',
      progress: 5,
      description: 'Incident handling and response certification for cybersecurity professionals.',
      color: 'from-cyan-500 to-cyan-600',
      statusColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      expectedDate: '2025'
    }
  ]

  const completedCertifications = [
    {
      name: 'Google Cybersecurity Certificate',
      issuer: 'Google/Coursera',
      completedDate: 'December 2023',
      description: 'Comprehensive cybersecurity fundamentals program covering security frameworks and tools.',
      verificationId: 'GCC-2023-12-001'
    },
    {
      name: 'Cisco Networking Basics',
      issuer: 'Cisco Networking Academy',
      completedDate: 'October 2023',
      description: 'Foundational networking concepts and protocols essential for cybersecurity.',
      verificationId: 'CNA-2023-10-002'
    }
  ]

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-cyber-gradient mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications and continuous learning journey in cybersecurity
          </p>
        </motion.div>

        {/* Completed Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-green-400 mb-8 text-center">
            ✅ Completed Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {completedCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="cyber-glass border-green-500/30 hover:cyber-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-white">{cert.name}</CardTitle>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-green-400 font-semibold">{cert.issuer}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{cert.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Completed:</span>
                        <span className="text-green-400">{cert.completedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Verification ID:</span>
                        <span className="text-green-400 font-mono text-xs">{cert.verificationId}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* In Progress & Planned Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-8 text-center">
            🎯 Certification Roadmap
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="cyber-glass border-purple-500/30 h-full hover:cyber-glow transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg text-white group-hover:text-cyber-gradient transition-colors">
                        {cert.name}
                      </CardTitle>
                      <Badge className={cert.statusColor}>
                        {cert.status}
                      </Badge>
                    </div>
                    <p className="text-purple-400 font-semibold">{cert.issuer}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-purple-400">{cert.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${cert.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${cert.color} cyber-glow`}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Target Date:</span>
                      <span className="text-purple-400">{cert.expectedDate}</span>
                    </div>

                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                      View Study Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="cyber-glass border-cyan-500/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                Certification Journey Stats
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyber-gradient mb-2">2</div>
                  <div className="text-sm text-gray-400">Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyber-gradient mb-2">6</div>
                  <div className="text-sm text-gray-400">In Progress</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyber-gradient mb-2">500+</div>
                  <div className="text-sm text-gray-400">Study Hours</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyber-gradient mb-2">2024</div>
                  <div className="text-sm text-gray-400">Target Year</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
