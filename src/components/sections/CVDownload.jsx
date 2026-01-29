import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const CVDownload = () => {
    const { ref, controls } = useScrollAnimation();

    const handleDownload = (language) => {
        const cvPaths = {
            en: '/cv/Abraham_Blanco_CV_EN.pdf',
            es: '/cv/Abraham_Blanco_CV_ES.pdf'
        };

        const link = document.createElement('a');
        link.href = cvPaths[language];
        link.download = `Abraham_Blanco_CV_${language.toUpperCase()}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={controls}
                    transition={{ duration: 0.6 }}
                    className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 shadow-xl"
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <FileText size={28} className="text-blue-400" />
                        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Descarga mi CV
                        </h2>
                    </div>

                    <p className="text-slate-300 text-center mb-8 max-w-2xl mx-auto">
                        Obtén una copia completa de mi experiencia profesional y habilidades técnicas
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="/cv/Abraham_Blanco_CV_ES.pdf"
                            download
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <Download size={20} className="group-hover:animate-bounce" />
                            <span>CV en Español</span>
                        </motion.a>
                        <motion.a
                            href="/cv/Abraham_Blanco_CV_EN.pdf"
                            download
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <Download size={20} className="group-hover:animate-bounce" />
                            <span>CV in English</span>
                        </motion.a>
                    </div>

                    <p className="text-slate-400 text-sm text-center mt-8">
                        Formato PDF • Actualizado Enero 2026
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CVDownload;
