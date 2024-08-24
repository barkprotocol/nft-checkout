import { NextResponse } from "next/server";
import prisma from "../../../../prisma";  // Import Prisma Client instance

interface PaginationParams {
    skip?: number;  // Number of records to skip
    take?: number;  // Number of records to return
}

export const GET = async (req: Request) => {
    try {
        // Extract pagination parameters from query parameters
        const url = new URL(req.url);
        const skip = parseInt(url.searchParams.get('skip') || '0', 10);
        const take = parseInt(url.searchParams.get('take') || '10', 10);

        // Validate pagination parameters
        if (isNaN(skip) || skip < 0) {
            return NextResponse.json({
                message: 'Invalid Query Parameter: `skip` must be a non-negative number.',
            }, { status: 400 });
        }
        if (isNaN(take) || take <= 0) {
            return NextResponse.json({
                message: 'Invalid Query Parameter: `take` must be a positive number.',
            }, { status: 400 });
        }

        // Retrieve donations with pagination
        const donations = await prisma.donation.findMany({
            skip,
            take,
        });

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
