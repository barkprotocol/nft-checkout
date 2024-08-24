import { NextResponse } from "next/server";
import prisma from "../../../../prisma";  // Import Prisma Client instance

export const GET = async (req: Request) => {
    try {
        // Retrieve all donations from the database
        const donations = await prisma.donation.findMany();
        return NextResponse.json({ donations }, { status: 200 });
    } catch (error) {
        // Log the error to the server console for debugging
        console.error('Error fetching donations:', error);
        return NextResponse.json({
            message: 'Server Error',
            error: error instanceof Error ? error.message : 'Unknown error',
        }, { status: 500 });
    }
};
