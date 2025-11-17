import React, { useState, useEffect } from 'react';

interface ModuleTestProps {
    lessonId: number;
    isUnlocked: boolean;
    savedGrade: number | undefined;
    onSaveGrade: (lessonId: number, grade: number) => void;
}

export const ModuleTest: React.FC<ModuleTestProps> = ({ lessonId, isUnlocked, savedGrade, onSaveGrade }) => {
    const [currentGrade, setCurrentGrade] = useState<string>(savedGrade?.toString() || '');
    const [isEditing, setIsEditing] = useState<boolean>(savedGrade === undefined);

    useEffect(() => {
        if (savedGrade !== undefined) {
            setCurrentGrade(savedGrade.toString());
            setIsEditing(false);
        } else {
            setCurrentGrade('');
            setIsEditing(true);
        }
    }, [savedGrade]);

    const handleSave = () => {
        const gradeValue = parseFloat(currentGrade);
        if (!isNaN(gradeValue) && gradeValue >= 0 && gradeValue <= 120) {
            onSaveGrade(lessonId, gradeValue);
            setIsEditing(false);
        } else {
            alert('Por favor, insira uma nota válida entre 0 e 120.');
        }
    };
    
    if (!isUnlocked) {
        return (
            <div className="mt-2 p-4 bg-gray-100 border border-gray-200 rounded-lg text-center">
                <p className="font-semibold text-gray-600">Teste de Módulo: Lektionen {lessonId - 2}-{lessonId}</p>
                <p className="text-sm text-gray-500">Complete a Lektion {lessonId} para desbloquear este teste.</p>
            </div>
        );
    }

    return (
        <div className="mt-2 p-4 bg-gray-800 border border-gray-700 rounded-lg text-white">
            <h3 className="font-bold text-yellow-400 mb-2">Teste de Módulo: Lektionen {lessonId - 2}-{lessonId}</h3>
            {isEditing ? (
                <div className="flex flex-wrap items-center gap-2">
                    <input
                        type="number"
                        min="0"
                        max="120"
                        value={currentGrade}
                        onChange={(e) => setCurrentGrade(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                        placeholder="Sua nota (0-120)"
                        className="flex-grow p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
                    />
                    <button
                        onClick={handleSave}
                        className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                    >
                        Salvar
                    </button>
                    {savedGrade !== undefined && (
                        <button
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-500"
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            ) : (
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-gray-300">Sua nota registrada: <span className="font-bold text-lg text-white">{savedGrade}</span></p>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-3 rounded-lg transition-colors"
                    >
                        Alterar Nota
                    </button>
                </div>
            )}
        </div>
    );
};
