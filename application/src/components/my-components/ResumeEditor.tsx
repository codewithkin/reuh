"use client";
import { useEffect, useRef } from 'react';
import type {EditorJS as EditorJSType} from '@editorjs/editorjs';
import EditorJS from '@editorjs/editorjs';

interface ResumeEditorProps {
    data: any;
    onChange?: (data: any) => void;
    readOnly?: boolean;
}

export default function ResumeEditor({ data, onChange, readOnly = false }: ResumeEditorProps) {
    const editorRef = useRef<EditorJSType>();

    useEffect(() => {
        if (!editorRef.current) {
            editorRef.current = new EditorJS({
                holder: 'resume-editor',
                readOnly,
                data: data,
                onChange: async () => {
                    const content = await editorRef.current?.save();
                    onChange?.(content);
                },
                tools: {
                    header: {
                        class: require('@editorjs/header'),
                        config: {
                            levels: [1, 2, 3],
                            defaultLevel: 1
                        }
                    },
                    list: require('@editorjs/list'),
                    paragraph: require('@editorjs/paragraph'),
                    checklist: require('@editorjs/checklist'),
                    table: require('@editorjs/table'),
                    marker: require('@editorjs/marker'),
                    inlineCode: require('@editorjs/inline-code'),
                }
            });
        }

        return () => {
            if (editorRef.current && editorRef.current.destroy) {
                editorRef.current.destroy();
            }
        };
    }, []);

    return (
        <div id="resume-editor" className="prose max-w-full bg-white p-4 rounded-lg shadow-sm min-h-[500px]" />
    );
} 