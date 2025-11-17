import React from 'react';
import { Modal } from './Modal';

const StudentGuide: React.FC = () => (
    <div className="space-y-4 text-gray-600">
        <h3 className="text-lg font-semibold text-gray-800">Como funciona o App</h3>
        <ol className="list-decimal list-inside space-y-3">
            <li><strong>Comece:</strong> Preencha seu nome em "Seu Progresso" para iniciar sua jornada.</li>
            <li><strong>Acompanhe o Progresso:</strong> Marque as tarefas de cada lição (Lektion) para ganhar XP e ver seu avanço.</li>
            <li><strong>Faça Testes:</strong> Ao final de cada 3 lições, um teste de módulo será desbloqueado. Insira sua nota para calcular sua média.</li>
            <li><strong>Desafio Diário:</strong> Use "Missão do dia" para um exercício rápido e prático.</li>
            <li><strong>Foco Total:</strong> O "Relógio Pomodoro" ajuda a gerenciar seu tempo de estudo com sessões de foco e pausas.</li>
            <li><strong>Links Úteis:</strong> Salve links importantes, como dicionários ou sites de exercícios, na seção "Meus Links Úteis".</li>
            <li><strong>Salve e Restaure:</strong> Para trocar de dispositivo, use "Exportar JSON" para salvar seu progresso e "Importar JSON" no novo aparelho.</li>
            <li><strong>Recomeçar:</strong> Se precisar, use "Resetar progresso" para limpar todos os dados e começar de novo (cuidado, esta ação é irreversível!).</li>
        </ol>
    </div>
);

interface HelpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Guia de Ajuda">
            <div className="prose max-w-none">
                <StudentGuide />
            </div>
        </Modal>
    );
};
