"use client"

import {useEffect, useState} from "react";

import styles from "./CircularProgress.module.css";

interface CircularProgressProps {
    value: number
    maxValue: number
    size?: number
    strokeWidth?: number
    showLabel?: boolean
}

export default function CircularProgress({
                                             value,
                                             maxValue,
                                             size = 120,
                                             strokeWidth = 20,
                                             showLabel = true,
                                         }: CircularProgressProps) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setProgress(0)
        const timer = setTimeout(() => {
            setProgress(value)
        }, 100)

        return () => clearTimeout(timer)
    }, [value])

    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const progressValue = Math.min(Math.max(progress, 0), maxValue)
    const progressPercent = progressValue / maxValue
    const strokeDashoffset = circumference - progressPercent * circumference

    const center = size / 2

    return (
        <div className={styles.container} style={{width: size, height: size}}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>

                <circle className={styles.backgroundCircle} cx={center} cy={center} r={radius}
                        strokeWidth={strokeWidth}/>

                <circle
                    className={`${progress === maxValue ? styles.progressCircleGreen : styles.progressCircle}`}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset,
                    }}
                    transform={`rotate(-90 ${center} ${center})`}
                />
            </svg>

            {showLabel && (
                <div className={`${progress === maxValue ? styles.labelGreen : styles.label}`}>
                    {progress}/{maxValue}
                </div>
            )}
        </div>
    )
}

